import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
