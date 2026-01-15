import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const URPHDRPAndBuiltIn = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Rendering/URPHDRPAndBuiltIn';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="URP/HDRP & Built-in" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default URPHDRPAndBuiltIn;
