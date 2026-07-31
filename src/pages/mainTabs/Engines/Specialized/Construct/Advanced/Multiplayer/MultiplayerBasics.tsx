import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
