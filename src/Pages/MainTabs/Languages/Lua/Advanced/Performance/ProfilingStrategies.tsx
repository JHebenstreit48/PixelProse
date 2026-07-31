import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
