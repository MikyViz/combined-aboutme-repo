// Composable для работы с NPM API
import { ref, onMounted } from 'vue';

export const useNpmPackageInfo = (packageName) => {
  const packageData = ref(null);
  const downloadStats = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchPackageInfo = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Получаем основную информацию о пакете
      const packageResponse = await fetch(`https://registry.npmjs.org/${packageName}`);
      if (!packageResponse.ok) {
        throw new Error(`Failed to fetch package info: ${packageResponse.status}`);
      }
      const packageInfo = await packageResponse.json();

      // Получаем статистику скачиваний за последний месяц
      const monthlyResponse = await fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
      const monthlyDownloads = monthlyResponse.ok ? await monthlyResponse.json() : { downloads: 0 };

      // Получаем статистику скачиваний за последнюю неделю
      const weeklyResponse = await fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`);
      const weeklyDownloads = weeklyResponse.ok ? await weeklyResponse.json() : { downloads: 0 };

      // Извлекаем нужные данные
      packageData.value = {
        name: packageInfo.name,
        version: packageInfo['dist-tags']?.latest || 'Unknown',
        description: packageInfo.description || '',
        keywords: packageInfo.keywords || [],
        license: packageInfo.license || 'Unknown',
        homepage: packageInfo.homepage || '',
        repository: packageInfo.repository?.url || '',
        author: packageInfo.author || {},
        maintainers: packageInfo.maintainers || [],
        createdTime: packageInfo.time?.created || '',
        modifiedTime: packageInfo.time?.modified || '',
        versions: Object.keys(packageInfo.versions || {}),
        latestVersionInfo: packageInfo.versions?.[packageInfo['dist-tags']?.latest] || {}
      };

      downloadStats.value = {
        monthly: monthlyDownloads.downloads || 0,
        weekly: weeklyDownloads.downloads || 0,
        monthlyFormatted: formatDownloads(monthlyDownloads.downloads || 0),
        weeklyFormatted: formatDownloads(weeklyDownloads.downloads || 0)
      };

    } catch (err) {
      error.value = err.message;
      console.error('Error fetching NPM data:', err);
    } finally {
      loading.value = false;
    }
  };

  const formatDownloads = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const getDownloadSummary = () => {
    if (!downloadStats.value) return 'Loading...';
    
    const { monthly, weekly } = downloadStats.value;
    const dailyAvg = Math.round(weekly / 7);
    
    return `${monthly}/month (${weekly}/week, ~${dailyAvg}/day)`;
  };

  const getPackageSize = () => {
    if (!packageData.value?.latestVersionInfo?.dist) return 'Unknown';
    
    const size = packageData.value.latestVersionInfo.dist.unpackedSize;
    if (size >= 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    } else if (size >= 1024) {
      return `${(size / 1024).toFixed(1)} kB`;
    }
    return `${size} B`;
  };

  const getFileCount = () => {
    return packageData.value?.latestVersionInfo?.dist?.fileCount || 'Unknown';
  };

  onMounted(() => {
    fetchPackageInfo();
  });

  return {
    packageData,
    downloadStats,
    loading,
    error,
    fetchPackageInfo,
    getDownloadSummary,
    getPackageSize,
    getFileCount
  };
};