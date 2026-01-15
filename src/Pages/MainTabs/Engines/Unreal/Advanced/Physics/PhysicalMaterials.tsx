import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PhysicalMaterials = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Physics/PhysicalMaterials';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Physical Materials" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PhysicalMaterials;
