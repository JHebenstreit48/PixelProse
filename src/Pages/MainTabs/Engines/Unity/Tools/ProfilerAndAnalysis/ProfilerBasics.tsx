import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilerBasics = () => {
  const markdownFilePath = 'Engines/Unity/Tools/ProfilerAndAnalysis/ProfilerBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiler Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilerBasics;
