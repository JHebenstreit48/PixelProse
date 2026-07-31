import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FixturesAndTestWorlds = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/Authoring/FixturesAndTestWorlds';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fixtures & Test Worlds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixturesAndTestWorlds;
