import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetcodeForGameObjects = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Networking/NetcodeForGameObjects';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Netcode for GameObjects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetcodeForGameObjects;
