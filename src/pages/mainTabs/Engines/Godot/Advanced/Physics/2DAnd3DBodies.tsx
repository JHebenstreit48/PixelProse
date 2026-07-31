import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
