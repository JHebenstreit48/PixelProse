import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VehiclesAndDestruction = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Physics/VehiclesAndDestruction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vehicles & Destruction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VehiclesAndDestruction;
