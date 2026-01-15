import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpritesAndInstances = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/ObjectsAndBehaviors/SpritesAndInstances';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sprites & Instances" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpritesAndInstances;
