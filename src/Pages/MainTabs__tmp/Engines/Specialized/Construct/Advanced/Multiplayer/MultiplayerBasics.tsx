import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MultiplayerBasics = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Multiplayer/MultiplayerBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multiplayer Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiplayerBasics;
