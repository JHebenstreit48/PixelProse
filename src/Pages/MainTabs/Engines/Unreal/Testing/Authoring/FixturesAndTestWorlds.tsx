import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FixturesAndTestWorlds = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/Authoring/FixturesAndTestWorlds';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fixtures & Test Worlds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixturesAndTestWorlds;
