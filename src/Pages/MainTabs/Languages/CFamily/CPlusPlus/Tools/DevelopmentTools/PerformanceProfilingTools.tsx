import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceProfilingTools = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Tools/DevelopmentTools/PerformanceProfilingTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance Profiling Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceProfilingTools;
