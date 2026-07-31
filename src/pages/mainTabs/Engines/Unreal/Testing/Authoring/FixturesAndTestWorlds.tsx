import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
