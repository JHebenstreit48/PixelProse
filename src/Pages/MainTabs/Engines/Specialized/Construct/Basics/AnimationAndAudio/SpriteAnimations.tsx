import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpriteAnimations = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/AnimationAndAudio/SpriteAnimations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sprite Animations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpriteAnimations;
