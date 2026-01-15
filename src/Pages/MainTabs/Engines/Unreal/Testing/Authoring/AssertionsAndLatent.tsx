import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssertionsAndLatent = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/Authoring/AssertionsAndLatent';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assertions & Latent" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsAndLatent;
