import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SetupAndRunner = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/Basics/SetupAndRunner';

  return (
    <>
      <PageLayout>
        <PageTitle title="Setup & Runner" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SetupAndRunner;
