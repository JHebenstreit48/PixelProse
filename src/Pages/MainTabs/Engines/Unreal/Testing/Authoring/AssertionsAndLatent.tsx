import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
