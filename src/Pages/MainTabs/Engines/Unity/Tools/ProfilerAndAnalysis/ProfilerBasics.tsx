import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilerBasics = () => {
  const markdownFilePath = 'Engines/Unity/Tools/ProfilerAndAnalysis/ProfilerBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiler Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilerBasics;
