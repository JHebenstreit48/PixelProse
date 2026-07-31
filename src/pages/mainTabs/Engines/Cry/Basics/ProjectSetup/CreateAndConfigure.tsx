import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
