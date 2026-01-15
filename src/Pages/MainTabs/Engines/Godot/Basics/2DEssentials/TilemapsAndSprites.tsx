import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TilemapsAndSprites = () => {
  const markdownFilePath = 'Engines/Godot/Basics/2DEssentials/TilemapsAndSprites';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tilemaps & Sprites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TilemapsAndSprites;
