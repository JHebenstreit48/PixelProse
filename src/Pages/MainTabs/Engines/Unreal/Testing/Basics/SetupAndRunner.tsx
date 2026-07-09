import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
