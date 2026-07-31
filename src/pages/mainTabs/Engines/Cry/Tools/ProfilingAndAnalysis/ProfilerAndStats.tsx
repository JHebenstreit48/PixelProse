import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProfilerAndStats = () => {
  const markdownFilePath = 'Engines/Cry/Tools/ProfilingAndAnalysis/ProfilerAndStats';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiler & Stats" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilerAndStats;
