import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TilemapsAndSprites = () => {
  const markdownFilePath = 'Engines/Godot/Basics/2DEssentials/TilemapsAndSprites';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tilemaps & Sprites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TilemapsAndSprites;
