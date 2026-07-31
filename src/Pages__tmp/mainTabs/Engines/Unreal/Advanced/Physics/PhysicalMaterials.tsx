import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
