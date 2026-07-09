import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
