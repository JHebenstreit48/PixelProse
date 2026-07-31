import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SpritesAndInstances = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/ObjectsAndBehaviors/SpritesAndInstances';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sprites & Instances" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpritesAndInstances;
