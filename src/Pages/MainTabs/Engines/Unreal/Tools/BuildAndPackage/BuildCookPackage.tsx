import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildCookPackage = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/BuildAndPackage/BuildCookPackage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build/Cook/Package" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildCookPackage;
