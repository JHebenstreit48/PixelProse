import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProfilingAndOptimization = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Performance/ProfilingAndOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiling & Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilingAndOptimization;
