import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
