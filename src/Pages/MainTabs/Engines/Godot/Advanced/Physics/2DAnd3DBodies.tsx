import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TwoDAnd3DBodies = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Physics/2DAnd3DBodies';

  return (
    <>
      <PageLayout>
        <PageTitle title="2D & 3D Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TwoDAnd3DBodies;
