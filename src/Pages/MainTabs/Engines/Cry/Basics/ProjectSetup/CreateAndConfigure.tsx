import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreateAndConfigure = () => {
  const markdownFilePath = 'Engines/Cry/Basics/ProjectSetup/CreateAndConfigure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Create & Configure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateAndConfigure;
