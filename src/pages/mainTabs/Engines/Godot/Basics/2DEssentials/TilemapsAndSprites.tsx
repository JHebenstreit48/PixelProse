import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
