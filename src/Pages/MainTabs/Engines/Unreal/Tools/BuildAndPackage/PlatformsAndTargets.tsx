import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PlatformsAndTargets = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/BuildAndPackage/PlatformsAndTargets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Platforms & Targets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlatformsAndTargets;
