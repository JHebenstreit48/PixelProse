import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
