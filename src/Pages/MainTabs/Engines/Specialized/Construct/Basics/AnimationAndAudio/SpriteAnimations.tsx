import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SpriteAnimations = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/AnimationAndAudio/SpriteAnimations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sprite Animations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpriteAnimations;
