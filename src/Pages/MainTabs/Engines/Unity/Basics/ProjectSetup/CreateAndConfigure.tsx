import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreateAndConfigure = () => {
  const markdownFilePath = 'Engines/Unity/Basics/ProjectSetup/CreateAndConfigure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Create & Configure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateAndConfigure;
