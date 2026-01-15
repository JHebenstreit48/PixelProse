import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilerAndStats = () => {
  const markdownFilePath = 'Engines/Cry/Tools/ProfilingAndAnalysis/ProfilerAndStats';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiler & Stats" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilerAndStats;
