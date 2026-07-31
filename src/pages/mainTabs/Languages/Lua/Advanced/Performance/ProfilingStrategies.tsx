import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
