import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const URPHDRPAndBuiltIn = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Rendering/URPHDRPAndBuiltIn';

  return (
    <>
      <PageLayout>
        <PageTitle title="URP/HDRP & Built-in" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default URPHDRPAndBuiltIn;
