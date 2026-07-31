import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AssertionsAndLatent = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/Authoring/AssertionsAndLatent';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assertions & Latent" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsAndLatent;
