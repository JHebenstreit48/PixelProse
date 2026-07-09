import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
