import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilingStrategies = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Performance/ProfilingStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiling Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilingStrategies;
