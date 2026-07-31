import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
