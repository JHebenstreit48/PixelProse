import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
