import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
