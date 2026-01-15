import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShaderGraphAndHLSL = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/MaterialsAndShaders/ShaderGraphAndHLSL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Shader Graph & HLSL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShaderGraphAndHLSL;
