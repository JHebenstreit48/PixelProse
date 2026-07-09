import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
