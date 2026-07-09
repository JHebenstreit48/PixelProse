import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PhysicalMaterials = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Physics/PhysicalMaterials';

  return (
    <>
      <PageLayout>
        <PageTitle title="Physical Materials" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PhysicalMaterials;
