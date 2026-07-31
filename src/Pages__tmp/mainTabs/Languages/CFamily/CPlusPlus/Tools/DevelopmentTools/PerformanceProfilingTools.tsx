import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
